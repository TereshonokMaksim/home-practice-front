import styles from "./postCard.module.css"


export interface Tag {
    id: number
    name: string
}

export interface Post {
    id: number
    name: string
    description: string
    image: string
    likes: number
    tags: Tag[]
}

// export type processedPost = Omit<Post, "id">

export function PostCard(postData: Post){
    const {id, name, description, image, likes, tags} = postData
    return (
        <div className = {styles.mainPostDiv}>
            <img src={image} alt="hmmmmmNoImage"/>
            <div className={styles.postAllData}>
                <div className={styles.textData}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.addPostData}>
                    <div className={styles.tagsBlock}>
                        {tags.map((tag) => {
                            return <p className={styles.tag} key = {`${id}-${tag.name}`}>{tag.name}</p>
                        })}
                    </div>
                    <div className={styles.likeBlock}>
                        <p>{likes}</p>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png" alt="like" />
                    </div>
                </div>
            </div>
        </div>
    )
}