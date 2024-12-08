import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaPlus } from 'react-icons/fa';

export default function AccordionUsage() {
  const accordionData = [
    {
      id: 'panel1',
      title: 'LIVERAISONS',
      content: 'Liveraisons offers fast, reliable delivery services with seamless tracking and flexible options.'
    },
    {
      id: 'panel2',
      title: 'QUESTIONS',
      content: 'Questions are inquiries made to gain information, clarify doubts, or provoke thought.'
    }
  ];

  return (
    <div>
      {accordionData.map(({ id, title, content }) => (
        <Accordion key={id} className='bg-gray-50'>
          <AccordionSummary
            expandIcon={<FaPlus />}
            aria-controls={`${id}-content`}
            id={`${id}-header`}
          >
            {title}
          </AccordionSummary>
          <AccordionDetails>
            {content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}