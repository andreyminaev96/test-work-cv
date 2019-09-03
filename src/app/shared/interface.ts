export interface Skill {
    appChart: Array<string>;
    data: Array<number>;
    text: string;
    id: string;
}

export interface MenuItem {
    icon: string;
    label: string;
    link: string;
}

export interface ContentWork {
    position: string;
    company: string;
    data: string;
    text: string;
}

export interface TextContent {
    title: string;
    text_1: string;
    text_2 ?: string;
    text_3 ?: string;
    text_4 ?: string;
    text_5 ?: string;
    text_6 ?: string;
    text_7 ?: string;
    text_8 ?: string;
    text_9 ?: string;
    text_10 ?: string;
}