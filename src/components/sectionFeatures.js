import React from "react"

import Feature from './feature.js';

export default function SectionFeatures(props) {
  const features = props.section.features;
  const featureItems = features.map((featureToHighlight) => 
  <Feature featureDetail={featureToHighlight} />
  );
  return (
    <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{props.section.alert}</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {props.section.title}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      {props.section.subtitle}
      </p>
      </div>
      <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
      {featureItems}
      </dl>
      </div>

    </div>
    </div>
  )
}