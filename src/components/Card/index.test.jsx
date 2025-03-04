import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./index.jsx";
import { ThemeProvider } from "../../utils/context/index.jsx";


describe("The Card component", () => {
    it("Affiche l'image provenant de l'API", async () => {

        const profile = {
            id: 1,
            name: "John Doe",
            job: "Développeur",
            picture: "https://example.com/fake-image.jpg"
        };
        const index = 0;

        render(
            <ThemeProvider>
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.job}
                    picture={profile.picture}
                    title={profile.name}
                    />
            </ThemeProvider>
        );
        // verifier que card utilise bien la picture passée en props
        const cardImage = screen.getByRole('img', {name: "freelance"})

        expect(cardImage).toHaveAttribute('src', profile.picture)
        // verifier que card utilise bien le label passé en props
        const cardLabel = screen.getByText(profile.job)

        expect(cardLabel.textContent).toBe(profile.job)
        // verifier que card utilise bien le title passé en props
        const cardTitle = screen.getByText(profile.name)

        expect(cardTitle).toBeInTheDocument()
    });
    it('Should add ⭐️ around title', async () => {

        const profile = {
            id: 1,
            name: "John Doe",
            job: "Développeur",
            picture: "https://example.com/fake-image.jpg"
        };
        const index = 0;
        
        render(
            <ThemeProvider>
                <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(profile.name)
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe(`${profile.name} ⭐️`)
        })
    })