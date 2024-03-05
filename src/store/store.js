// store.js
import create from 'zustand';

// Créez le magasin Zustand
const useStore = create((set) => ({
  sharedState: 'Initial value',
  setSharedState: (newValue) => set({ sharedState: newValue }),
}));

export default useStore;
