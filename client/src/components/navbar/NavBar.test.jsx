import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe(NavBar,()=>{
    // it("loads with an profile photo",()=>{
    //     const { getByTestId } = render(<NavBar />)
    //     const 
    // })
    it('renders the image tag',()=>{
        render(<NavBar />);

        expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders h3 tag",()=>{
        render(<NavBar />);
        
        const text = screen.getByText(/Jane Mwangi/i);
        expect(text).toBeInTheDocument();
    });

    it("renders h1 tag",()=>{
        render(<NavBar />);
        
        const text = screen.getByText(/Send IT/i);
        expect(text).toBeInTheDocument();
    })

    it("render an icon",()=>{
        render(<NavBar />);

        expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    })
});
