import { useState } from 'react';

export const BreedsSelect = ({ breeds, onBreedChange }) => {
  const [selectedBreed, setSelectedBreed] = useState('bulldog');

  // ドロップダウンメニューで選択を変更したときに呼び出される
  // event.target.valueは、選択された<option>の値（犬種名）を取得
  // 取得した値をonBreedChange関数に渡し、親コンポーネントに渡す
  // ドロップダウンで選択した犬種を表示ボタンの押下関数に渡す！
  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  // 表示ボタンを押下したとき
  const handleButtonClick = () => {
    onBreedChange(selectedBreed);
  };

  // ドロップダウンメニュー表示
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      <label htmlFor="breed-select" style={{ marginRight: '10px' }}>Breeds List:</label>
      <select id="breed-select" onChange={handleSelectChange} value={selectedBreed}>
        <option value="">Choose</option>
        {/* ↓犬種の選択肢リスト↓ */}
        {/* map関数はJavaScriptの配列メソッドで、配列の各要素に対して関数を実行し、その結果から新しい配列を生成 */}
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={handleButtonClick} style={{ marginLeft: '10px' }}>表示</button>
    </div>
  );
};

export default BreedsSelect;
