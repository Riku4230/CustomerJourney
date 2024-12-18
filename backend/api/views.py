from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import uuid
from datetime import datetime

@api_view(['POST'])
def workflow_run(request):
    try:
        # バリデーション
        required_fields = ['inputs', 'response_mode', 'user']
        for field in required_fields:
            if field not in request.data:
                return Response(
                    {'error': f'Missing required field: {field}'},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # 入力データの取得
        inputs = request.data['inputs']
        response_mode = request.data['response_mode']
        user = request.data['user']

        # 必要な入力フィールドの確認
        required_inputs = ['product', 'persona', 'value']
        for field in required_inputs:
            if field not in inputs:
                return Response(
                    {'error': f'Missing required input: {field}'},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # ワークフローの実行をシミュレート
        workflow_run_id = str(uuid.uuid4())
        task_id = str(uuid.uuid4())
        current_time = int(datetime.now().timestamp())

        # レスポンスの生成
        if response_mode == "blocking":
            response_data = {
                "workflow_run_id": workflow_run_id,
                "task_id": task_id,
                "data": {
                    "id": str(uuid.uuid4()),
                    "workflow_id": str(uuid.uuid4()),
                    "status": "succeeded",
                    "outputs": {
                        "product": inputs['product'],
                        "persona": inputs['persona'],
                        "value": inputs['value'],
                        "result": "Workflow processed successfully"
                    },
                    "error": None,
                    "elapsed_time": 0.875,
                    "total_tokens": 3562,
                    "total_steps": 3,
                    "created_at": current_time,
                    "finished_at": current_time + 30
                }
            }
        else:
            response_data = {
                "error": "Only blocking mode is supported in this example"
            }
            return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

        return Response(response_data)

    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )