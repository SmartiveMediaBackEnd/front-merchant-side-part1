
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
export default class ActionHandler {

    public static exportToExcel = <T>(data: T[], filename: string) => {


        // Convert data to worksheet
        const ws = XLSX.utils.json_to_sheet(data);

        // Create workbook
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Save to file
        XLSX.writeFile(wb, filename);
    };

    public static exportToExcelFromApi = (Receiving_data: any,name:string) => {
        const workbook = XLSX.read(Receiving_data, { type: 'array' });
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, `${name}.xlsx`);
    }


    public static PrintTable = (): void => {
        window.print()
    };
}