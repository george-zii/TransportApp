import { useStore } from "@tanstack/react-store";
import { appLocalization } from "../store/store";
import { globalLocalization } from "../localization/localization";

export const useLocalization = () => {
    const localization = useStore(appLocalization, appLocalization => appLocalization.state.localization) || globalLocalization.ru

    return {
        localization,
    };
};