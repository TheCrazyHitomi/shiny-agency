import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./";
import { ThemeProvider } from "../../utils/context";
import { render, screen } from "@testing-library/react";

describe('The home page', () => {
    it('should render the home Title', async () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )
        expect(
            // screen.getByText('Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents')
            screen.getByRole('heading', {level: 1, text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'})
            ).toBeTruthy()
        screen.debug() // This will print the HTML of the rendered component
    })
})
