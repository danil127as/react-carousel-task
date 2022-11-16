import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQ = () => {

  const faqNumberStyle = {
    color: "#aaa",
    marginRight: "16px"
  }

  const faqDescStyle = {
    paddingLeft: '30px'
  }

  return (
    <section className='faq-section'>
      <div className='faq-container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <span style={faqNumberStyle}>1.</span>
              <span>Accordion 1</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={faqDescStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <span style={faqNumberStyle}>2.</span>
              <span>Accordion 2</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={faqDescStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <span style={faqNumberStyle}>3.</span>
              <span>Accordion 3</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={faqDescStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ