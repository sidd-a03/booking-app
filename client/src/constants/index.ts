import type {HeroCardItemInterface, NavItemInterface} from "../types";

export const NavItems: NavItemInterface[] = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Movies',
        url: '/movies',
    },
    {
        id: 3,
        title: 'Theaters',
        url: '/theaters',
    },
    {
        id: 4,
        title: 'Releases',
        url: '/releases',
    },
    {
        id: 5,
        title: 'Favorites',
        url: '/favorites',
    }
]

export const HeroCardItems: HeroCardItemInterface[] = [
    {
        id: 1,
        backgroundImagePath: '/assets/images/batman.png',
        title: 'The Batman',
        genre: 'Action | Crime',
        year: 2022,
        time: '2h 56m',
        description: 'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.'
    },
    {
        id: 2,
        backgroundImagePath: '/assets/images/onepiece.png',
        title: 'One Piece',
        genre: 'Anime',
        year: 1999,
        time: '2h 8m',
        description: 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, as he explores the Grand Line in search of the mythical treasure known as the "One Piece" to become the next King of the Pirates.'
    },
    {
        id: 3,
        backgroundImagePath: '/assets/images/gog.png',
        imagePath: '/assets/images/marvelLogo.svg',
        title: 'Guardians of the Galaxy',
        genre: 'Action | Adventure | Sci-Fi',
        year: 2018,
        time: '2h 8m',
        description: 'In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.'
    },
    {
        id: 4,
        backgroundImagePath: '/assets/images/naruto.png',
        title: 'Naruto: Shippuden',
        genre: 'Anime',
        year: 2003,
        time: '2h 8m',
        description: 'Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition on his journey to becoming Hokage in his village.'
    }
]