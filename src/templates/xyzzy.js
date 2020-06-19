import React from "react"

import LayoutHello from '../components/layoutHello.js';
import sectionComponentTypeList from '../components/indexSectionComponents.js';

export default function Xyzzy({ pageContext }) {
  const sections = pageContext.frontmatter.sections;
  const SectionComponents = sections.map((section) => {
    let sectionType = section.type;
	let Component = sectionComponentTypeList[sectionType];
	return (
	  <Component section={section} />
	)
  });
  return (
    <LayoutHello>
	  <div className='xyzzy'>
	    {SectionComponents}
	  </div>
	</LayoutHello>
  )
}