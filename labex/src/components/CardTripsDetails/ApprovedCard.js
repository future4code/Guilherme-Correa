import {CardCandidatoAprovado} from './style'

export const ApprovedCard = (props) => {
    console.log("approved", props.candidates)
    const traveler = props.candidates
    return (
        <div>
            {traveler && traveler.candidates && traveler.candidates.map((data) =>{
                return (
                    <div key={data.id}>
                        <CardCandidatoAprovado>
                            <span>Nome:</span><span class="conteudo">{data.name}</span>
                        </CardCandidatoAprovado>
                    </div>
                )
            })}
            
        </div>
    )
}