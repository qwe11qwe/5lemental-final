import CategoryButton from '@/components/categoryButton/CategoryButton';
import useCategoryStore from '@/store/category';
import { useState } from 'react';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';

function MenuList() {
  const { category, getMenu } = useCategoryStore();
  const [menuNameList, setMenuNameList] = useState([]);
  const [fileNameList, setFileNameList] = useState([]);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    console.log(category);
    getMenu(category).then((res) => {
      const names = res.map((item) => item.name);
      setMenuNameList(names);
    });
  }, [category]);

  useEffect(() => {
    getMenu(category).then((res) => {
      const fileNames = res.map((item) => item.photo);
      setFileNameList(fileNames);
    });
  }, [category]);

  useEffect(() => {
    getMenu(category).then((res) => {
      const images = res.map((item) =>
        pb.files.getUrl(item, item.photo, {
          thumb: '80x80',
        })
      );
      setImageList(images);
    });
  }, [category]);

  useEffect(() => {
    console.log('category', category);
  }, [category]);

  useEffect(() => {
    console.log(menuNameList);
  }, [menuNameList]);

  useEffect(() => {
    console.log('fileNames', fileNameList);
  }, [fileNameList]);

  useEffect(() => {
    console.log('image', imageList);
  }, [imageList]);

  return (
    <>
      <CategoryButton />
      {menuNameList.map((name, index) => (
        <div key={index}>
          <p>{name}</p>
          {imageList[index] && <img src={imageList[index]} alt={name}></img>}
        </div>
      ))}
    </>
  );
}

export default MenuList;
