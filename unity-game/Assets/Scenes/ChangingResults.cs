using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangingResults : MonoBehaviour
{

  //  public SpriteRenderer spriter;
  //  private Sprite newSprite;

  /*  public void ChangeSpriteScene(int score){
        if(score > 5){
          spriter.Sprite = newSprite;
        }
    } */

    // Start is called before the first frame update
    void Start()
    {
        int score = 3;
        if(score > 5){
          // find the sprite object
          //FindObjectsofType
          gameObject.SetActive(true);

        } else {
          gameObject.SetActive(false);
        }
    }


    // Update is called once per frame
    void Update()
    {

    }
}
