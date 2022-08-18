import { useContext, createContext } from 'react';
import {
  Appearance,
  Dimensions,
  EmitterSubscription,
  NativeEventSubscription,
  ScaledSize,
} from 'react-native';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

export type ColorSchemeName = 'light' | 'dark';
export type DarkModeName = 'light' | 'dark' | 'system';
export type OrientationLockType = 'portrait' | 'landscape';

class ColorSchemeStore {
  colorScheme: ColorSchemeName = Appearance.getColorScheme() || 'light';
  darkMode: DarkModeName = 'system';
  window: ScaledSize = Dimensions.get('window');
  orientation: OrientationLockType = 'portrait';

  colorSchemeListeners = new Set<() => void>();
  dimensionListener?: EmitterSubscription;
  appearanceListener?: NativeEventSubscription;
  constructor() {
    this.setDimensions(Dimensions);
    this.setAppearance(Appearance);
  }
  private notifyColorScheme() {
    for (const l of this.colorSchemeListeners) l();
  }

  subscribeColorScheme = (listener: () => void) => {
    this.colorSchemeListeners.add(listener);
    return () => this.colorSchemeListeners.delete(listener);
  };

  setAppearance(appearance: typeof Appearance) {
    this.appearanceListener?.remove();
    this.appearanceListener = appearance.addChangeListener(({ colorScheme }) => {
      if (this.darkMode === 'system') {
        this.colorScheme = colorScheme || 'light';
        this.notifyColorScheme();
      }
    });
  }

  setDimensions(dimensions: Dimensions) {
    this.window = dimensions.get('window');
    this.orientation = this.window.height >= this.window.width ? 'portrait' : 'landscape';

    this.dimensionListener?.remove();
    this.dimensionListener = dimensions.addEventListener('change', ({ window }) => {
      const topics: string[] = ['window'];

      if (window.width !== this.window.width) topics.push('width');
      if (window.height !== this.window.height) topics.push('height');

      this.window = window;

      const orientation = window.height >= window.width ? 'portrait' : 'landscape';
      if (orientation !== this.orientation) topics.push('orientation');
      this.orientation = orientation;
    });
  }

  getColorScheme = () => {
    return this.colorScheme;
  };
  getDarkMode = () => {
    return this.darkMode;
  };

  setDarkMode = (darkMode: DarkModeName) => {
    const oldColorScheme = this.colorScheme;

    this.darkMode = darkMode;
    this.colorScheme =
      this.darkMode === 'system' ? Appearance.getColorScheme() || 'light' : this.darkMode;

    if (oldColorScheme !== this.colorScheme) {
      this.notifyColorScheme();
    }
  };
}

export const colorSchemeStore = new ColorSchemeStore();
const StoreContext = createContext(colorSchemeStore);

export function useColorScheme() {
  const store = useContext(StoreContext);
  const colorScheme: ColorSchemeName = useSyncExternalStore(
    store.subscribeColorScheme,
    store.getColorScheme
  );
  const darkMode: DarkModeName = useSyncExternalStore(
    store.subscribeColorScheme,
    store.getDarkMode
  );

  return {
    colorScheme,
    darkMode,
    setColorScheme: store.setDarkMode,
  };
}
