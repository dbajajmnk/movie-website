import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../Footer";
import '@testing-library/jest-dom';


it("Footer renders successfully", ()=> {
    render(<Footer></Footer>);  
});

it("Header contains Copyright", () => {
    render(<Footer></Footer>);  
    const footerElement = screen.getByTestId("footer-id");
    expect(footerElement).toBeInTheDocument();
});