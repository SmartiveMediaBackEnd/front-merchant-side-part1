import { useState } from "react";

export const useOpenFilterDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    //  open sideDrawer
    const HandelOpenDrawer = () => {
        setOpenDrawer(true);
    };
    //  close sideDrawer
    const HandelCloseDrawer = () => {
        setOpenDrawer(false);
    };

    return {
        HandelOpenDrawer,
        HandelCloseDrawer,
        openDrawer
    }
}