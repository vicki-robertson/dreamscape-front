import { expect, it, test,describe} from 'vitest';
import {logRoles}from "@testing-library/dom";
import { render,screen } from '@testing-library/react';
import PhotoCard from '../../src/app/components/ui/PhotoCard';



describe("Given a PhotoCard component",()=>{
  describe("When it is renderend",()=>{
    const expectedText = "Paris";
    const mockPhotoCard ={
      id:333,
      image:"http://localhost:3000/_next/image?url=%2Fassets%2Fimg%2Fparis.jpg&w=384&q=75",
      name: "Paris",
      location: "Francia"
    }
    test('then it should a heading with the title "Paris"', () => {
      const {container}=render(<PhotoCard data={mockPhotoCard}/>);
      logRoles(container);
      const heading = screen.getByRole("heading",{level:3,name:expectedText});
      expect(heading).toBeInTheDocument();
    });

    test('then it should show an image with the alt text "Paris"', () => {
      render(<PhotoCard data={mockPhotoCard}/>)
      const image= screen.getByAltText(expectedText);
      expect(image).toBeInTheDocument();
    })
    
  })
})

