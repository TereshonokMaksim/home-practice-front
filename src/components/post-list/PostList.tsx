import { useEffect, useState } from "react"
import { PostCard } from "../post-card/PostCard"
import styles from "./postList.module.css"

import testTags from "./../../assets/testData/testDataTags.json"
import testPosts from "./../../assets/testData/testDataPosts.json"

// copypasted from json file of backend

interface Tag {
    id: number
    name: string
}

interface Post {
    id: number
    name: string
    description: string
    image: string
    likes: number
    tags: Tag[]
}

interface RawPost extends Omit<Post, "tags">{
    tags: number[]
}


const tags: Tag[] = testTags
const rawPosts: RawPost[] = testPosts
const posts: Post[] = rawPosts.map(rawPost => {return {...rawPost, tags: tags.filter(tag => rawPost.tags.includes(tag.id))}})


interface LikeOption {
    name: string
    defaultChecked: boolean
    value: "<0" | number
}

const LIKE_OPTIONS: LikeOption[] = [
    {
        name: "Less than 0", 
        defaultChecked: false,
        value: "<0"
    }, 
    {
        name: "More than 0", 
        defaultChecked: true,
        value: 0
    }, 
    {
        name: "More than 50", 
        defaultChecked: false,
        value: 50
    }, 
    {
        name: "More than 100", 
        defaultChecked: false,
        value: 100
    }
]

export function PostList(){
    const [postSearchValue, setPostSearchValue] = useState("")
    const [tagSearchValue, setTagSearchValue] = useState("")
    // If num, then it filters by the number or more, if "<0" than only those that has less than 0 likes (more dislikes)
    const [likesFilter, setLikesFilter] = useState<number | "<0">(0)
    const [tagFilter, setTagFilter] = useState<Tag[] | "All">("All")
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [filteredTags, setFilteredTags] = useState(tags.slice(0, 4))

    function toggleTagFilter(tagId: Tag): void{
        if (tagFilter === "All"){
            setTagFilter([tagId])
            return
        }
        if (tagFilter.includes(tagId)){
            if (tagFilter.length === 1){
                setTagFilter("All")
                return
            }
            const newTagFilter = [...tagFilter]
            newTagFilter.splice(newTagFilter.indexOf(tagId), 1)
            setTagFilter(newTagFilter)
            return
        }
        setTagFilter([...tagFilter, tagId])
    }

    useEffect(() => {
        const nameAndLikeFiltered = posts.filter(post => {
            if (post.name.includes(postSearchValue)){
                if (likesFilter === "<0"){
                    return post.likes < 0
                }
                return post.likes > likesFilter
            }
            return false
        })
        if (tagFilter === "All"){
            setFilteredPosts(nameAndLikeFiltered)
            return
        }
        const tagsFiltered = nameAndLikeFiltered.filter(post => {
            return tagFilter.length === tagFilter.filter(tagToCheck => {return post.tags.includes(tagToCheck)}).length
        })
        setFilteredPosts(tagsFiltered)
    }, [postSearchValue, likesFilter, tagFilter])

    useEffect(() => {
        setFilteredTags(tags.filter(tag => tag.name.includes(tagSearchValue)).slice(0, 4))
    }, 
    [tagSearchValue])

    return (
        <div className = {styles.postListBg}>
            <div className={styles.filters}>
                <h3>Filters</h3>
                <div className={styles.subFilterList}>
                    <h4>By Tags:</h4>
                    <div className={styles.filterOptions}>
                        <div className={`${styles.tagSearchBar} ${styles.searchBar}`}>
                            <input placeholder = "Search..." onChange = {event => {setTagSearchValue(event.target.value)}} />
                        </div>
                    {filteredTags.length > 0 ? filteredTags.map(tag => {return (
                        <label className={styles.filter} key = {tag.name as string}>
                            <input type="checkbox" onChange = {event => {toggleTagFilter(tag)}} />
                            {tag.name} ({filteredPosts.filter(post => post.tags.includes(tag)).length})
                        </label>)}) : (
                    <div className={styles.notFoundTag}>
                        <p>Tags are not found :(</p>
                    </div>
                )}
                    </div>
                </div>
                <div className={styles.subFilterList}>
                    <h4>By Likes:</h4>
                    <div className={styles.filterOptions}>
                    {LIKE_OPTIONS.map(like => {return (
                        <label className={styles.filter} key = {like.name}>
                            <input type="radio" name = "likeFilterInput" defaultChecked = {like.defaultChecked} onChange={event => {setLikesFilter(like.value)}} />
                            {like.name}
                        </label>)})}  
                    </div>
                </div>
            </div>
            <div className = {styles.postList}>
                <div className={styles.searchBar}>
                    <input placeholder = "Search..." onChange = {event => {setPostSearchValue(event.target.value)}} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Q" />
                </div>
                {filteredPosts.length > 0 ? filteredPosts.map(post => {
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
                }) : (
                    <div className={styles.notFoundPost}>
                        <p>Posts are not found :(</p>
                        <p>Try changing filters or your search request.</p>
                    </div>
                )}
            </div>
        </div>
    )
}