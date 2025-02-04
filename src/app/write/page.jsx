"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import {useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
//import { useRouter } from "next/navigation";
//import { useSession } from "next-auth/react";
//import { getStorage,ref,uploadBytesResumable,getDownloadURL,} from "firebase/storage";
//import { app } from "@/utils/firebase";


const WritePage = () => {

  //const { status } = useSession();
  //const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  /*const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
 
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  */

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title"className={styles.input}/>
      
      <div className={styles.editor}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/add.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            
            <button className={styles.addButton}>
              
                <Image src="/image.png" alt="" width={16} height={16} />
              
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} placeholder="Tell your story..."/>
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
