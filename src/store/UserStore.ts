import { create } from "zustand";

type UserStore = {
  usuarioLogado: string;
  tentouLogar: boolean;

  setUsuarioLogado: (usuario: string) => void;
  setTentouLogar: (valor: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  usuarioLogado: "",
  tentouLogar: false,

  setUsuarioLogado: (usuario: string) => set(() => ({ usuarioLogado: usuario })),
  setTentouLogar: (valor: boolean) => set(() => ({ tentouLogar: valor })),
}));

export default useUserStore;
