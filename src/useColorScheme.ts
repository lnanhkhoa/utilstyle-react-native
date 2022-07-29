import { useContext, createContext } from 'react';
import { Appearance } from 'react-native';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

export type ColorSchemeName = 'light' | 'dark';
export type ColorSchemeSystem = 'light' | 'dark' | 'system';

class ColorSchemeStore {
  colorScheme: ColorSchemeName = Appearance.getColorScheme() || 'light';
  colorSchemeListeners = new Set<() => void>();
  constructor() {}
  private notifyColorScheme() {
    for (const l of this.colorSchemeListeners) l();
  }

  subscribeColorScheme = (listener: () => void) => {
    this.colorSchemeListeners.add(listener);
    return () => this.colorSchemeListeners.delete(listener);
  };

  getColorScheme = () => {
    return this.colorScheme;
  };

  setColorScheme = (value: ColorSchemeSystem) => {
    if (value === 'system') {
      this.colorScheme = Appearance.getColorScheme() || 'light';
    } else {
      this.colorScheme = value;
    }
    this.notifyColorScheme();
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

  return {
    colorScheme: colorScheme,
    setColorScheme: store.setColorScheme,
  };
}
