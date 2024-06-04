function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (nilaiAwal < nilaiAkhir){
        if (dataArray.length > 5){
            let container = [];
            for(let i = 0; i < dataArray.length; i++){
             if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir){
                container.push(dataArray[i]);
                container.sort((a, b) => a - b );
            }               
        }
        if(container.length == 0){
            return "nilai tidak ditemukan"
    }
        return container;
    }else{
        return "Jumlah angka dalam data Array harus lebih dari 5"
    }
    }else {
        return "Nilai akhir harus lebih besar dari nilai awal"
    }
}
const result = seleksiNilai(5, 20, [2, 25, 4, 14, 17, 38, 8]);
console.log(result)

const result1 = seleksiNilai(15, 3, [2, 25, 4, 14, 17, 38, 8]);
console.log(result1)

const result2 = seleksiNilai(4, 17, [2, 25, 4]); 
console.log(result2)    

const result3 = seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
console.log(result3)