import type {MovieCardProps} from "../../types";
import {useNavigate} from "react-router-dom";
import {StarIcon} from "lucide-react";

const MovieCard = (movie: MovieCardProps) => {

    const { path, id, title, released_date, genres, runtime, ratings } = movie;
    const year: number = new Date(released_date).getFullYear();

    const genre = genres.slice(0, 2).join(' | ');
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-full h-full">
            {/* Image Container */}
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
                <img
                    onClick={() => navigate(`/movies/${id}`)}
                    src={path}
                    alt={title}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow mt-3">
                <p className="font-semibold text-white truncate text-lg" title={title}>{title}</p>
                <p className="text-sm text-gray-400 mt-1">{year} • {genre} • {runtime}</p>
            </div>

            {/* Footer / Action Section */}
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-700/50">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/movies/${id}`);
                    }}
                    className="px-4 py-2 text-xs text-white bg-primary-dull hover:bg-primary transition rounded-full font-medium cursor-pointer"
                >
                    Buy Tickets
                </button>
                <p className="flex items-center gap-1 text-sm text-gray-300 font-medium">
                    <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {ratings.toFixed(1)}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
