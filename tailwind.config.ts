import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

export default <Partial<Config>>{
    darkMode: 'class',
    plugins: [
        createThemes({
            custom: {
                primary: "#2A9D8F",
            },
        }),
    ]
}