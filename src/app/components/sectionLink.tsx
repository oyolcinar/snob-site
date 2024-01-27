'use client';
import React from 'react';

interface SectionLinkProps {
  sectionId: string;
  label: string;
  navigateTo?: string;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  sectionId,
  label,
  navigateTo,
}) => {
  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      const offset = window.innerWidth >= 768 ? 130 : 0;
      const sectionTop =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    } else {
      console.warn(`Element with ID '${id}' not found.`);
    }
  };

  return (
    <>
      {navigateTo ? (
        <a href={navigateTo}>
          <div className='cursor-pointer hover:text-selectColor transition duration-300'>
            {label}
          </div>
        </a>
      ) : (
        <div
          className='cursor-pointer hover:text-selectColor transition duration-300'
          onClick={() => scrollToSection(sectionId)}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default SectionLink;
