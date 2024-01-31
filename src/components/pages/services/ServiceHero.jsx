import React from 'react'
import Image from 'next/image'
import background from '../../../../public/images/CARTOON.png'

const ServiceHero = () => {
  return (
    <>
    <div class="h-screen bg-gray-50 flex items-center">
	<section class="bg-cover bg-center py-32 w-full" style={{backgroundImage:`url(${background})`}}>
		<div class="container mx-auto text-left text-white">
			<div class="flex items-center">
				<div class="w-1/2">
					<h1 class="text-5xl font-medium mb-6">Welcome to My Agency</h1>
					<p class="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae.</p>
					<a href="#" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Demo</a>
				</div>
				<div class="w-1/2 pl-16">
					<Image src="/images/CARTOON.png" width={500} height={500} class="h-64 w-full object-cover rounded-xl" alt="Layout Image"/>
      </div>
				</div>
			</div>
	</section>
</div>
    </>
  )
}

export default ServiceHero