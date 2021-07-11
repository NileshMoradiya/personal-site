import { Theme, createTheme } from '@material-ui/core/styles';

import defaultTheme from '../data/theme';
import { useState } from 'react';

export default function useAppTheme(): { theme: Theme } {
    const [theme, setTheme] = useState<Theme>(createTheme(defaultTheme));
    return { theme: theme };
}
