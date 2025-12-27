import {ArrowRight, CalendarIcon, ClockIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import type { HeroCardProps } from "../../types";
import {Activity} from "react";

const HeroCard = ({ movie }: HeroCardProps) => {

    const { title, genre, description, time, year, imagePath, backgroundImagePath } = movie;
    const navigate = useNavigate();

    return (
        <section className={`flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover h-screen bg-[75%] md:bg-center`}
         style={{ backgroundImage: `url(${backgroundImagePath})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0" />

            <div className="relative z-10 flex flex-col items-start gap-4">
                <Activity mode={imagePath ? 'visible' : 'hidden'}>
                    <img src={imagePath} alt={title} className="max-h-11 lg:h-11 mt-20"/>
                </Activity>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-[15ch] leading-tight text-balance">
                    {title}
                </h1>
                <div className="flex items-center gap-4 text-gray-300">
                    <span>{genre}</span>
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4.5 h-4.5" /> {year}
                    </div>
                    <div className="flex items-center gap-1">
                        <ClockIcon className="w-4.5 h-4.5" /> {time}
                    </div>
                </div>
                <p className="max-w-md text-gray-300">
                    {description}
                </p>
                <button onClick={() => navigate('/movies')} className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
                    Explore Movies
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    )
}
export default HeroCard
