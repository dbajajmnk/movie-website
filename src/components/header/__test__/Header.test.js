import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../Header";
import '@testing-library/jest-dom';


it("Header renders successfully", ()=> {
    render(<Header title={ 'Movie Catalog' }></Header>);  
});

it("Header contains title", () => {
    render(<Header title={ 'Movie Catalog' }></Header>);  
    const headerElement = screen.getByTestId("header-id");
    expect(headerElement).toBeInTheDocument();
});