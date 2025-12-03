import { PostCard } from "../post-card/PostCard"
import styles from "./postList.module.css"

// copypasted from json file of backend
const tags = [
        {
            "id": 1,
            "name": "Rock"
        },
        {
            "id": 2,
            "name": "Ore"
        },
        {
            "id": 3,
            "name": "Copper"
        },
        {
            "id": 4,
            "name": "Iron"
        }
    ]

const posts = [
        {
            "id": 1,
            "name": "Argillite",
            "description": "Sedimentary rock thats actually not just gravel or processed mollusks.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Argillite.JPG",
            "likes": 12, 
            "tags": [tags[0]]
        },
        {
            "id": 2,
            "name": "Basalt",
            "description": "Extrusive magmatic rock that is really famous. Its not very cool, but it has some ores.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Basalt_12_%2848674276333%29.jpg/1920px-Basalt_12_%2848674276333%29.jpg",
            "likes": 5, 
            "tags": [tags[0]]
        },
        {
            "id": 3,
            "name": "Chalcopyrite",
            "description": "Copper ore, thats quite easy to find. Very important for copper mining industry and forms nice crystals.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chalcopyrite-199453.jpg",
            "likes": 48, 
            "tags": [tags[1], tags[2]]
        },
        {
            "id": 4,
            "name": "Tennanite",
            "description": "That is some strange copper ore, as sometimes it looks like crystals, sometimes like andesite.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tennantite2.jpg/1920px-Tennantite2.jpg",
            "likes": 29, 
            "tags": [tags[1], tags[2]]
        },
        {
            "id": 5,
            "name": "Limonite",
            "description": "Even though its an iron ore, it is largely used as nickel deposits. Also, it is very yellow, you can use it to get yellow dye or smth.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/LimoniteUSGOV.jpg",
            "likes": 106, 
            "tags": [tags[1], tags[3]]
        }
    ]
const LIKE_OPTIONS = [["Less than 0", false], ["More than 0", true], ["More than 50", false], ["More than 100", false]]

export function PostList(){
    return (
        <div className = {styles.postListBg}>
            <div className={styles.filters}>
                <h3>Filters</h3>
                <div className={styles.subFilterList}>
                    <h4>By Tags:</h4>
                    <div className={styles.filterOptions}>
                    {tags.map(tag => {return (
                        <div className={styles.filter} key = {tag.name as string}>
                            <input type="checkbox" />
                            <p>{tag.name}</p>
                        </div>)})}
                    </div>
                </div>
                <div className={styles.subFilterList}>
                    <h4>By Likes:</h4>
                    <div className={styles.filterOptions}>
                    {LIKE_OPTIONS.map(like => {return (
                        <div className={styles.filter} key = {like[0] as string}>
                            <input type="checkbox" defaultChecked = {like[1] as boolean} />
                            <p>{like[0]}</p>
                        </div>)})}  
                    </div>
                </div>
            </div>
            <div className = {styles.postList}>
                <div className={styles.searchBar}>
                    <p>Search...</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Q" />
                </div>
                {posts.map(post => {
                    const processedDesc = post.description
                    return <PostCard
                        name = {post.name}
                        description = {processedDesc}
                        image = {post.image}
                        likes = {post.likes}
                        tags = {post.tags}
                        key = {post.id}
                        id = {post.id}
                    ></PostCard>
                })}
            </div>
        <div className={styles.filterHelper}></div>
        </div>
    )
}