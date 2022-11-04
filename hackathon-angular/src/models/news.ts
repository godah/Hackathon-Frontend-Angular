export interface NewsResponse {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: News[];
}

export interface News {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
}
