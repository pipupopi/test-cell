export const initialState = {
  cellData: [],
  currentCellData: [],
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
}
