import { GigPreview } from './gig-preview.jsx'
import { FilterGigs } from './filter-gigs.jsx'

export function GigList({ gigs }) {
    // if (!gigs) {
    //     return (<h1>Loading</h1>)
    // }
    return (

            <div className="gigs-list-containers">
                <div className="filter-gigs-preview">
                    <FilterGigs />
                </div>

                <ul className="gig-list clean-list">
                    {gigs.map(gig =>
                        <GigPreview
                            key={gig._id}
                            gig={gig}
                        />
                    )}
                </ul>
            </div>
    )
}
