import React from "react"

export default function Feature(props) {
  return (
        <div className="relative">
        <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={props.featureDetail.svgpath} />
            </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{props.featureDetail.title}</p>
        </dt>
        <dd className="mt-2 ml-16 text-base text-gray-500">
        {props.featureDetail.subtitle}
        </dd>
        </div>
  )
}