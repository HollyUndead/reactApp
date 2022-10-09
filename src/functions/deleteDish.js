export function deleteDish(like, liked, setLiked)
{
    setLiked(liked.filter(p => p.id !== like.id))
    let likes = JSON.parse(localStorage.getItem('liked'))
    likes = likes.filter(p => p.id !== like.id)
    localStorage.setItem('liked', JSON.stringify(likes))
}