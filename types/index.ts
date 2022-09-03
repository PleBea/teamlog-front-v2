export interface headerItems {
    url: string;
    name: string;
    id: string;
}

export interface application {
    application_start: Date;
    application_end: Date;
    json: headerItems;
}

export interface award {
    year: string;
    award: string[];
}

export interface special {
    img: string;
    title: string;
    description: string;
}

export interface king {
  role: string;
  name: string;
  tel: string;
}

export interface curriculum {
  name: string;
  description: string;
}
