using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MoveScenes : MonoBehaviour
{
  public void MoveToScene (int sceneID){
    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
    //.LoadScene(sceneID);
    Debug.Log("MoveScenes");
  }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
