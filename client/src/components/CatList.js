import React from 'react'

export const CatList = ({ cat }) => {
  console.log(cat)
  return (
    <div>
      { cat.map((cat) => {
        return (<>
            <p>{cat.category.text}</p>
            { cat.childern.map((child, i)=> {
                if (child == null) {
                    return;
                }
                <p>{child.subCategory.text}</p>
                { child.childern.map((i)=> {
                    if (i == null) {
                        return;
                    }
                    <p>{i.text}</p>
                }) }
            }) }
        </>)
      }) }
    </div>
  )
}
