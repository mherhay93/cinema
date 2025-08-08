export type TButtonVariant = 'primary' | 'secondary'

export interface ISidebarMenuItem {
    id: string
    name: string
    icon: string
    href: string
}

export interface IMoviesInterface {
    Featured:IMovie;
    TendingNow: IMovie[];
}

export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl: string;
    Description: string;
}
