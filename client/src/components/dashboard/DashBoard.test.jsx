import { render, screen } from '@testing-library/react';
import DashBoard from './DashBoard';

describe(DashBoard,()=>{
    it("renders an home list item",()=>{
        render(<DashBoard />);

        expect(screen.getByText(/Home/i)).toBeInTheDocument()
    })
    it("renders an Send Delivery list item",()=>{
        render(<DashBoard />);

        expect(screen.getByText(/Send Delivery/i)).toBeInTheDocument()
    })
    it("renders an My Deliveries list item",()=>{
        render(<DashBoard />);

        expect(screen.getByText(/My Deliveries/i)).toBeInTheDocument()
    })
})