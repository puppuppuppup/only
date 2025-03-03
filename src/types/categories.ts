export type TCategoryEvent = {
    year: number;
    body: string;
};

export type TCategory = {
    name: string;
    events: TCategoryEvent[];
};
