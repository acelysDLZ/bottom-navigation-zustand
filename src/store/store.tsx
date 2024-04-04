import { create } from 'zustand';
import { TabIndexContextType } from '../types';

export const useTabIndexStore = create<TabIndexContextType>((set) => ({
    index : 0,
    setIndex : (index : number) => set({index})
}));