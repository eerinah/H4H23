using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChoiceLogic : MonoBehaviour
{
    void Start(){
        gameObject.SetActive(false);
    }
    public void AutismSymptomChoice(){
        GlobalVars.autismScore += 1;
        EndDialogue();
    }

    public void EndDialogue(){
        StopAllCoroutines();
        FindObjectOfType<Dialogue>().EndDialogue();
    }

    public void Activate(){
        gameObject.SetActive(true);
    }
}
