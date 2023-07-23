export const initialState = {
  cellData: [],
  currentCellData: [],
  page: 1,
};

export interface initialStateInterface {
  data: {
    cellData: {
      body: string;
      id: number;
      title: string;
      userId: number;
    }[];
    currentCellData: {
      body: string;
      id: number;
      title: string;
      userId: number;
    }[];
  };
  pages: {
    page: number;
  };
}
