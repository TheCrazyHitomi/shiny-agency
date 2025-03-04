import { describe, expect, it} from 'vitest';
import  Footer  from './index.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import {ThemeProvider}  from '../../utils/context/index.jsx';


describe('Footer',  () => {
    it('should render the footer without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
            )
            const nightModeButton = screen.getByRole('button')
            expect(nightModeButton.textContent).toBe('Changer de mode  🌞')
            fireEvent.click(nightModeButton)
            expect(nightModeButton.textContent).toBe('Changer de mode  🌙')
        });
    })