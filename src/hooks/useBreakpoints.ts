import { Breakpoint, useMediaQuery, useTheme } from "@material-ui/core";

const useBreakpoints = (filter: 'up' | 'down' | 'only' = 'down') => {
    const theme = useTheme();

    return {
        xs: useMediaQuery(theme.breakpoints[filter]('xs')),
        sm: useMediaQuery(theme.breakpoints[filter]('sm')),
        md: useMediaQuery(theme.breakpoints[filter]('md')),
        lg: useMediaQuery(theme.breakpoints[filter]('lg')),
        xl: useMediaQuery(theme.breakpoints[filter]('xl')),
    };
};

export default useBreakpoints;
