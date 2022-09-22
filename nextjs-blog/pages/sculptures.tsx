import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link';



export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

const hStyle = {
  fontSize: '20px',
  textAlign: 'center' as const,
  fontWeight: "bold"
};

const pStyle = {
  fontSize: '10px',
  textAlign: 'center' as const,
  width:"75%",
  margin:"auto"
  
};

const backToHome = {
  margin: '3rem 0 0'
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
   
    <div>
      <h1 style={hStyle}> ADAM SCULPTURES </h1>
   

      <p style={pStyle}> ‘Paintings are sacred objects in some sense …. and we gaze at them in ignorance and wonder. 
      And the reason for that is that the unknown shines through the mattes in partially articulated form. …… Well that’s the rule of art …. and that’s the rule of artists. 
      Real artists are contending with the unknown and they have a personality trait – openness – that makes them do that (creativity) – 
      they can’t even help it. …… Open people have to be creative. They have to be, otherwise they die. They don’t have any vitality and so they’re cursed with the necessity of 
      putting a foot out into the unknown and making sense of it. They’re also cursed with the necessity of trying to make a living while they’re doing that which they can’t 
      because it’s almost impossible to monetise creative action. It’s not that creative action is without value: creative people are entrepreneurs; creative people revitalise cities;
       creative people make things magnificent and beautiful. …… A real piece of art is a window into the transcendental. And you need that in your life because you’re finite and limited and 
       bounded by your ignorance and your lack of knowing. And unless you can make a connection to the transcendental, 
      then you don’t have the strength to prevail. Without beauty, there’s no call to higher being. Life is too dismal and tragic with the absence of the sublime.’ - Jordan Peterson </p>

   
    <div className="mx-auto max-w-2xl py-0 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
        
      </div>
      

      <div style={backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
    </div>

 
          
          
    </div>

    
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  )
}