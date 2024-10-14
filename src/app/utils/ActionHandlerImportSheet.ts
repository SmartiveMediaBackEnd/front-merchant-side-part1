


import * as XLSX from 'xlsx';

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      console.log('Imported Data:', jsonData);
      alert('File uploaded and data imported successfully!');
    };
    reader.readAsArrayBuffer(file);
  }
};








///////////////////////////////////////////////////////////////////////////////////////

// import * as XLSX from 'xlsx';

export default class ActionHandlerImportSheet {

    public static importFromExcel = async (file: File): Promise<any[]> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const data = new Uint8Array(event.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                // to json
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                resolve(jsonData);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsArrayBuffer(file);
        });
    };
}
/////////////////////////////////////////////////////////////////////////////////////////

// import * as XLSX from 'xlsx';

// export default class ActionHandlerImportSheet {

//     // دالة لاستيراد البيانات من ملف Excel
//     public static importFromExcel = async (file: File): Promise<any[]> => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
            
//             reader.onload = (event) => {
//                 const data = new Uint8Array(event.target?.result as ArrayBuffer);
//                 const workbook = XLSX.read(data, { type: 'array' });

//                 // تحويل أول ورقة عمل إلى JSON
//                 const firstSheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[firstSheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet);

//                 resolve(jsonData);
//             };

//             reader.onerror = (error) => {
//                 reject(error);
//             };

//             reader.readAsArrayBuffer(file);
//         });
//     };

//    
//     public static exportToExcel = <T>(data: T[], filename: string) => {
//         const ws = XLSX.utils.json_to_sheet(data);
//         const wb: XLSX.WorkBook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//         XLSX.writeFile(wb, filename);
//     };

//    
//     public static exportToExcelFromApi = (Receiving_data: any, name: string) => {
//         const workbook = XLSX.read(Receiving_data, { type: 'array' });
//         const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//         const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], { type: fileType });
//         FileSaver.saveAs(data, `${name}.xlsx`);
//     };

//    
//     public static PrintTable = (): void => {
//         window.print();
//     };
// }
